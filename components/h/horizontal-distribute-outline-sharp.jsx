import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uitdnubas {
  fill: currentColor;
  d: path("M2 22V2h2v20zm8.5-5V7h3v10zm9.5 5V2h2v20z");
}
</style><path class="uitdnubas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:horizontal-distribute-outline-sharp"} {...others} />);
}

export default Component;
