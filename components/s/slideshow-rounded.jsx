import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ky_-h1b4s {
  fill: currentColor;
  d: path("M14.927 12.348q.187-.13.187-.348t-.187-.348l-4.421-2.825q-.212-.137-.416-.025q-.205.111-.205.354v5.688q0 .242.205.354q.204.111.416-.025zM5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20z");
}
</style><path class="ky_-h1b4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:slideshow-rounded"} {...others} />);
}

export default Component;
