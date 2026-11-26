import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wrkzimbes {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M13.5623 3L18.9977 3C21.696 3 23.6201 5.6173 22.8152 8.1931L19.6906 18.1931C19.1687 19.8631 17.6224 21 15.8731 21L5.0023 21C2.304 21 0.3799 18.3827 1.1848 15.8069L4.3094 5.8069C4.8313 4.1369 6.3776 3 8.1269 3Z");
}
</style><path clip-rule="evenodd" class="wrkzimbes"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:parallelogram-fill"} {...others} />);
}

export default Component;
