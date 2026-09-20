import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.dmz20cz4x {
  fill: currentColor;
  d: path("M228 200a4 4 0 0 1-4 4H32a4 4 0 0 1 0-8h192a4 4 0 0 1 4 4M29.2 149.12a12 12 0 0 1 1.51-12.83l81.66-100.83a20.1 20.1 0 0 1 31.26 0l81.66 100.83a12.1 12.1 0 0 1-9.37 19.71H40.08a12 12 0 0 1-10.88-6.88m7.22-3.44a4 4 0 0 0 3.66 2.32h175.84a4 4 0 0 0 3.66-2.32a4 4 0 0 0-.51-4.36L137.41 40.5a12.09 12.09 0 0 0-18.82 0L36.93 141.32a4 4 0 0 0-.51 4.36");
}
</style><path class="dmz20cz4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:eject-simple-thin"} {...others} />);
}

export default Component;
