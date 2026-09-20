import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n_6nrkjdq {
  fill: currentColor;
  d: path("M2.73 4h18.54l-2.612 4.5H5.342zm3.186 5.5h12.169l-2.327 4H8.242zm2.9 5h6.368L12 20z");
}
</style><path class="n_6nrkjdq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:tornado"} {...others} />);
}

export default Component;
