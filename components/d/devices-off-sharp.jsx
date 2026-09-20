import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ofl8wf9_z {
  fill: currentColor;
  d: path("M19.923 21.685L17.239 19h-2.431v-2.43l-2.77-2.77v2.816H4V5.742l-2.03-2.03l.707-.708l17.954 17.973zM12.044 9.52L7.523 5h12.323v1h-7.802zm2.764-.752h6.384v9.9l-6.384-6.391zm3.189 3.731q.29 0 .483-.2q.193-.202.193-.47q0-.29-.193-.483t-.488-.193q-.273 0-.469.193t-.196.488q0 .273.2.469q.201.196.47.196M3 19v-1h9.039v1z");
}
</style><path class="ofl8wf9_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:devices-off-sharp"} {...others} />);
}

export default Component;
