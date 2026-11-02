import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vdpmxfb7f {
  fill: currentColor;
  d: path("M17.718 7H19a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h1.282A3.551 3.551 0 0 1 12 2.979A3.55 3.55 0 0 1 17.718 7M11 7v-.909a3.5 3.5 0 0 1-.02-1.053a1.55 1.55 0 0 0-1.661-1.077A1.549 1.549 0 0 0 9.111 7Zm2 0h1.889a1.55 1.55 0 1 0-1.869-1.962c.047.35.04.705-.02 1.053Zm-2 3v3H5a1 1 0 0 0 0 2h6v3a1 1 0 0 0 2 0v-3h6a1 1 0 0 0 0-2h-6v-3a1 1 0 0 0-2 0");
}
</style><path class="vdpmxfb7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:gift-fill"} {...others} />);
}

export default Component;
