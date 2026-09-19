import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iw9q_db8e {
  fill: currentColor;
  d: path("M20.54 17.73L15 11V5h1c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1h1v6l-5.54 6.73c-.32.39-.46.83-.46 1.27c.01 1.03.82 2 2 2h14c1.19 0 2-.97 2-2c0-.44-.14-.88-.46-1.27");
}
</style><path class="iw9q_db8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-science"} {...others} />);
}

export default Component;
