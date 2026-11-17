import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fhms5fbgt {
  fill: currentColor;
  d: path("M16 6v3h2a3 3 0 0 1 3 3v7q0 .345-.077.68L10.243 9H14V6a2 2 0 0 0-4 0a1 1 0 0 1-2 0a4 4 0 0 1 8 0M2.707 4.293l17 17a.999.999 0 1 1-1.414 1.414L17.586 22H6a3 3 0 0 1-3-3v-7c0-1.204.717-2.291 1.825-2.761L1.293 5.707a.999.999 0 1 1 1.414-1.414");
}
</style><path class="fhms5fbgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:lock-off-fill"} {...others} />);
}

export default Component;
