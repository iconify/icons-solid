import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eqx4czu-u.css';
import '../../css/k/koinx6osy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eqx4czu-u"/><path class="koinx6osy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:organization-24"} {...others} />);
}

export default Component;
