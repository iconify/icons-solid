import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vt9wqgbza {
  fill: currentColor;
  d: path("m19.385 19l-2.693-2.692l.714-.708l1.479 1.479V5h1v12.085l1.484-1.485l.708.708zM4 17.116v-3.21l7.375-7.273q.485-.466 1.159-.46t1.133.49l.931.943q.46.479.457 1.15t-.482 1.13l-7.325 7.23zm1-1h1.846l4.896-4.839l-.913-.904l-.914-.904L5 14.308zm7.456-5.552l-1.827-1.808z");
}
</style><path class="vt9wqgbza"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:edit-arrow-down-outline-sharp"} {...others} />);
}

export default Component;
