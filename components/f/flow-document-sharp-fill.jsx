import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g5ooy_btt {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 4L22 4C22.5523 4 23 4.4477 23 5L23 17C23 17.5523 22.5523 18 22 18C21.7432 18 21.4963 17.9012 21.3103 17.7241C20.1482 16.6173 18.6048 16 17 16C15.3952 16 13.8518 16.6173 12.6897 17.7241C11.1556 19.1851 9.1184 20 7 20C4.8816 20 2.8444 19.1851 1.3103 17.7241C1.1122 17.5354 1 17.2737 1 17L1 5C1 4.4477 1.4477 4 2 4Z");
}
</style><path clip-rule="evenodd" class="g5ooy_btt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:flow-document-sharp-fill"} {...others} />);
}

export default Component;
