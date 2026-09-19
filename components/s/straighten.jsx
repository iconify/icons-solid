import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y9i8ak8te {
  fill: currentColor;
  d: path("M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2z");
}
</style><path class="y9i8ak8te"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:straighten"} {...others} />);
}

export default Component;
