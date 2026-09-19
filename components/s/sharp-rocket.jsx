import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jun_ylb5p {
  fill: currentColor;
  d: path("M12 2.5s4.5 2.04 4.5 10.5c0 2.49-1.04 5.57-1.6 7H9.1c-.56-1.43-1.6-4.51-1.6-7C7.5 4.54 12 2.5 12 2.5m2 8.5c0-1.1-.9-2-2-2s-2 .9-2 2s.9 2 2 2s2-.9 2-2m-6.31 9.52c-.48-1.23-1.52-4.17-1.67-6.87L4 15v7zM20 22v-7l-2.02-1.35c-.15 2.69-1.2 5.64-1.67 6.87z");
}
</style><path class="jun_ylb5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-rocket"} {...others} />);
}

export default Component;
