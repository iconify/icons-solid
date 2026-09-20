import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uibqwacqf.css';
import '../../css/s/sz5bu0b9r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uibqwacqf"/><path class="sz5bu0b9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:burger-arrow-right-duotone"} {...others} />);
}

export default Component;
