import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fuvw7qbuz {
  fill: currentColor;
  d: path("m19 15l-1.41-1.41L13 18.17V2h-2v16.17l-4.59-4.59L5 15l7 7z");
}
</style><path class="fuvw7qbuz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-south"} {...others} />);
}

export default Component;
