import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t95zvacjd {
  d: path("M13.588 21h-8.47V10.962L13.588 3zm2.647 0V8.538l2.647 2.768V21z");
}
</style><path class="t95zvacjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:imo"} {...others} />);
}

export default Component;
