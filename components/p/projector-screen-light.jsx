import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.vnuhpjbaw {
  fill: currentColor;
  d: path("M216 78a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14H40a14 14 0 0 0-14 14v16a14 14 0 0 0 14 14h2v100H32a6 6 0 0 0 0 12h90v20.84a22 22 0 1 0 12 0V190h90a6 6 0 0 0 0-12h-10V78Zm-78 154a10 10 0 1 1-10-10a10 10 0 0 1 10 10M38 64V48a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2m164 114H54V78h148Z");
}
</style><path class="vnuhpjbaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:projector-screen-light"} {...others} />);
}

export default Component;
