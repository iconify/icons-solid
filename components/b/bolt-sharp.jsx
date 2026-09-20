import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cp3oi9bpb {
  fill: currentColor;
  d: path("m8 22l1-7H4l9-13h2l-1 8h6L10 22z");
}
</style><path class="cp3oi9bpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:bolt-sharp"} {...others} />);
}

export default Component;
