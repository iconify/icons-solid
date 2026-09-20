import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xvrgnz8qg.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="xvrgnz8qg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:control-buttons-skip-forward-2"} {...others} />);
}

export default Component;
