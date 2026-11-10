import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.trxzdxb0d {
  fill: currentColor;
  d: path("M9 10H5V8H9V10ZM17 3C20.312 3 23 5.69 23 9V18C23 18.55 22.552 19 22 19H13V21H11V19H2C1.448 19 1 18.55 1 18V9C1 5.69 3.686 3 7 3H17ZM7 5C4.791 5 3 6.79 3 9V17H11V9C11 6.79 9.209 5 7 5Z");
}
</style><path class="trxzdxb0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:mailbox-sharp-fill"} {...others} />);
}

export default Component;
