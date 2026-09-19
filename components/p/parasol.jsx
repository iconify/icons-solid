import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d5bgb_b8s.css';
import '../../css/c/csm28-9_z.css';
import '../../css/b/bdkeo7bdd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d5bgb_b8s"/><path class="csm28-9_z"/><path class="bdkeo7bdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:parasol"} {...others} />);
}

export default Component;
