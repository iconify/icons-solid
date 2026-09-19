import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fk59ojb5k {
  fill: currentColor;
  d: path("M12 16c.55 0 1 .45 1 1v4h3c.55 0 1-.45 1-1v-5.21l.57.92a1.003 1.003 0 0 0 1.7-1.06L12.85 4.36a1 1 0 0 0-1.7 0L4.73 14.65c-.29.47-.15 1.09.32 1.38s1.08.15 1.38-.32L7 14.8V20c0 .55.45 1 1 1h3v-4c0-.55.45-1 1-1m1-3c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1");
}
</style><path class="fk59ojb5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-bungalow"} {...others} />);
}

export default Component;
