import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w88ri53dc.css';
import '../../css/i/i0h_6ybcs.css';
import '../../css/e/etn0ud2ez.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="w88ri53dc"/><path class="i0h_6ybcs"/><path class="etn0ud2ez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:file-gif"} {...others} />);
}

export default Component;
