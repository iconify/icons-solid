import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z8nd4gbbc.css';
import '../../css/m/m9thc4yei.css';
import '../../css/j/j_-m04xen.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z8nd4gbbc"/><path class="m9thc4yei"/><path class="j_-m04xen"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:folder"} {...others} />);
}

export default Component;
