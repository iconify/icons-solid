import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.grodn8eiz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 2.75h12.5l-.58.81l-.34.48l-.58.81l.59.81l.32.43l.59.81H5.25l.59-.81l.32-.43l.59-.81l-.58-.81l-.34-.48l-.58-.81zm0 7.15h12.5l-.58.81l-.34.48l-.58.81l.58.81l.34.48l.58.81H5.25l.58-.81l.34-.48l.58-.81l-.58-.81l-.34-.48l-.58-.81zm0 7.2h12.5l-.59.81l-.32.43l-.59.81l.58.81l.34.48l.58.81H5.25l.58-.81l.34-.48l.58-.81l-.59-.81l-.32-.43l-.59-.81z");
}
</style><path class="grodn8eiz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:spine-vertebra-sharp"} {...others} />);
}

export default Component;
