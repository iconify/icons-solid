import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/ve51lgbsq.css';
import '../../css/d/d2k80oitw.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ve51lgbsq"/><path class="d2k80oitw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:bug-twotone"} {...others} />);
}

export default Component;
