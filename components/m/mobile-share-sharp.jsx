import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tdyr0c5sz {
  fill: currentColor;
  d: path("M8.77 15.5h1v-3h3.61l-1.588 1.58l.708.708L15.288 12L12.5 9.211l-.708.689l1.57 1.6H8.769zM6 22V2h12.077v4.83H19v3.686h-.923V22z");
}
</style><path class="tdyr0c5sz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:mobile-share-sharp"} {...others} />);
}

export default Component;
