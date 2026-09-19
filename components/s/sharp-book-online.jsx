import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.txrf_ibow {
  fill: currentColor;
  d: path("M19 1H5v22h14zM7 18V6h10v12zm9-7V8H8v3.1c.55 0 1 .45 1 1s-.45 1-1 1V16h8v-3c-.55 0-1-.45-1-1s.45-1 1-1m-3.5 3.5h-1v-1h1zm0-2h-1v-1h1zm0-2h-1v-1h1z");
}
</style><path class="txrf_ibow"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-book-online"} {...others} />);
}

export default Component;
