import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tlm3xgzsb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tlm3xgzsb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:git-commit-vertical"} {...others} />);
}

export default Component;
