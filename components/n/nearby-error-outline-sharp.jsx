import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hsgzvcn0n {
  fill: currentColor;
  d: path("M20 18v-8h2v8zm1 4q-.425 0-.712-.288T20 21t.288-.712T21 20t.713.288T22 21t-.288.713T21 22m-9 .8L1.2 12L12 1.2l6 6v3.6l-6-6L4.8 12l7.2 7.2l6-6v3.6zm0-6.4L7.6 12L12 7.6l4.4 4.4z");
}
</style><path class="hsgzvcn0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:nearby-error-outline-sharp"} {...others} />);
}

export default Component;
