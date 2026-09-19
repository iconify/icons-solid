import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fvecf7b7b {
  fill: currentColor;
  d: path("m19.07 9.37l.71-.71a.996.996 0 1 0-1.41-1.41l-.71.71a.996.996 0 1 0 1.41 1.41M21 18H3c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1M12 7c.56 0 1-.45 1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v1c0 .55.45 1 1 1M4.96 9.34a.996.996 0 1 0 1.41-1.41l-.71-.71a.996.996 0 1 0-1.41 1.41zM19 16c0-3.87-3.13-7-7-7s-7 3.13-7 7z");
}
</style><path class="fvecf7b7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-wb-twilight"} {...others} />);
}

export default Component;
