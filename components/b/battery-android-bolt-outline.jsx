import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p8pg7ibsk {
  fill: currentColor;
  d: path("M4.385 17q-1 0-1.693-.692T2 14.616V9.385q0-1 .692-1.693T4.385 7h13.338l-.792 1H4.384q-.578 0-.981.403T3 9.385v5.23q0 .58.403.982q.403.403.982.403h11.613l-.202 1zM3 16V8zm14.867.23l.604-3.384h-2.855l4.069-5.077h.448l-.604 3.385h2.856l-4.07 5.077z");
}
</style><path class="p8pg7ibsk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:battery-android-bolt-outline"} {...others} />);
}

export default Component;
