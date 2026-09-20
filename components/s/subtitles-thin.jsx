import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.n75edqirv {
  fill: currentColor;
  d: path("M224 52H32a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12m4 140a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h192a4 4 0 0 1 4 4ZM52 136a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8H56a4 4 0 0 1-4-4m152 0a4 4 0 0 1-4 4h-96a4 4 0 0 1 0-8h96a4 4 0 0 1 4 4m-48 32a4 4 0 0 1-4 4H56a4 4 0 0 1 0-8h96a4 4 0 0 1 4 4m48 0a4 4 0 0 1-4 4h-16a4 4 0 0 1 0-8h16a4 4 0 0 1 4 4");
}
</style><path class="n75edqirv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:subtitles-thin"} {...others} />);
}

export default Component;
