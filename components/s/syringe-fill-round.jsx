import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f_3ma80au {
  fill: currentColor;
  d: path("m18.707 5.293l2 2a.999.999 0 1 1-1.414 1.414L18 7.414L16.414 9l2.293 2.293a.999.999 0 1 1-1.414 1.414L17 12.414l-4.293 4.293a3.83 3.83 0 0 1-4.614.614l-3.386 3.386a.999.999 0 1 1-1.414-1.414l3.386-3.386a3.83 3.83 0 0 1 .614-4.614L11.586 7l-.293-.293a.999.999 0 1 1 1.414-1.414L15 7.586L16.586 6l-1.293-1.293a.999.999 0 1 1 1.414-1.414ZM13 8.414L10.414 11L13 13.586L15.586 11Z");
}
</style><path class="f_3ma80au"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:syringe-fill-round"} {...others} />);
}

export default Component;
