import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jzccu8bfu.css';
import '../../css/o/om3uz4b8p.css';
import '../../css/c/csyesnsto.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="jzccu8bfu"/><path class="om3uz4b8p"/><path class="csyesnsto"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-cloud-virtual-server-classic"} {...others} />);
}

export default Component;
