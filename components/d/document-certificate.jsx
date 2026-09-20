import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/q/qcjmcebta.css';
import '../../css/a/a0wwy9-vm.css';
import '../../css/g/gce7t3bgu.css';
import '../../css/z/zlio6sbte.css';
import '../../css/y/yhk0lqb1y.css';
import '../../css/q/qg8u3bb7z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="qcjmcebta"/><path class="a0wwy9-vm"/><path class="gce7t3bgu"/><path class="zlio6sbte"/><path class="yhk0lqb1y"/><path class="qg8u3bb7z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:document-certificate"} {...others} />);
}

export default Component;
