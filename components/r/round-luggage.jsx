import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bha2c_b5v {
  fill: currentColor;
  d: path("M17 6h-2V3c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v3H7c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2c0 .55.45 1 1 1s1-.45 1-1h6c0 .55.45 1 1 1s1-.45 1-1c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2M8.75 18c-.41 0-.75-.34-.75-.75v-7.5c0-.41.34-.75.75-.75s.75.34.75.75v7.5c0 .41-.34.75-.75.75M12 18c-.41 0-.75-.34-.75-.75v-7.5c0-.41.34-.75.75-.75s.75.34.75.75v7.5c0 .41-.34.75-.75.75m1.5-12h-3V3.5h3zm1.75 12c-.41 0-.75-.34-.75-.75v-7.5c0-.41.34-.75.75-.75s.75.34.75.75v7.5c0 .41-.34.75-.75.75");
}
</style><path class="bha2c_b5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-luggage"} {...others} />);
}

export default Component;
