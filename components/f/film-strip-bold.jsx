import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.mx3hzl87z {
  fill: currentColor;
  d: path("M216 36H40a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20M44 100h72v56H44Zm96-24V60h24v16Zm-24 0H92V60h24Zm0 104v16H92v-16Zm24 0h24v16h-24Zm0-24v-56h72v56Zm72-80h-24V60h24ZM68 60v16H44V60ZM44 180h24v16H44Zm144 16v-16h24v16Z");
}
</style><path class="mx3hzl87z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:film-strip-bold"} {...others} />);
}

export default Component;
