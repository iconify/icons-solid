import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jlh70pzro {
  fill: currentColor;
  d: path("M20 17v-6c0-1.1-.9-2-2-2H7V7l-3 3l3 3v-2h4v3H4v3c0 1.1.9 2 2 2h2c0 1.66 1.34 3 3 3s3-1.34 3-3h8v-2zm-9 3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m7-6h-4v-3h4zM17 2v2H9v2h8v2l3-3z");
}
</style><path class="jlh70pzro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:rv-hookup"} {...others} />);
}

export default Component;
