import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.weppshb-t {
  fill: currentColor;
  d: path("M9.077 15.385h5.077v-4.231h-1.27v-.852q0-.361.244-.601q.243-.24.603-.24q.367 0 .645.244q.278.243.278.603v.846h.769v-.842q0-.695-.497-1.157t-1.195-.463q-.666 0-1.141.475t-.475 1.14v.847H9.077zM6 22V2h12.077v4.83H19v3.686h-.923V22z");
}
</style><path class="weppshb-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:mobile-unlock-sharp"} {...others} />);
}

export default Component;
