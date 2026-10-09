import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k8wrvjbqf.css';
import '../../css/o/od1qbkb-t.css';
import '../../css/p/pwrb__blp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k8wrvjbqf"/><path class="od1qbkb-t"/><path class="pwrb__blp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:beach-hut-48"} {...others} />);
}

export default Component;
