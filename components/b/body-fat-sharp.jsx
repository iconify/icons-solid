import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n32ocrbto {
  fill: currentColor;
  d: path("M21 16h-1v6.2L-.5 12.025L20 1.8V8h1v2h-4V8h1V5.075L13.6 7.25q.675 1.075 1.038 2.275T15 12t-.363 2.5t-1.062 2.3l4.4 2.175V16H17v-2h4zm-9.25-.125q.6-.85.925-1.838T13 12t-.325-2.013t-.9-1.837L4 12z");
}
</style><path class="n32ocrbto"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:body-fat-sharp"} {...others} />);
}

export default Component;
