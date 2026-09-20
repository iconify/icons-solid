import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.igw8dsv7b {
  fill: currentColor;
  d: path("M20 17.246L7 4.112V2h8.5L20 6.5zm.654 4.823L16.584 18H7V8.416l-5.07-5.07l.708-.708l18.723 18.723zM15 7h4.154L15 2.846L19.154 7L15 2.846zM3 22V9h1v12h11v1z");
}
</style><path class="igw8dsv7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:file-copy-off-sharp"} {...others} />);
}

export default Component;
