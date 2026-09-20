import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/viskcjbkm.css';
import '../../css/f/f8s_4jbup.css';
import '../../css/o/o8qnxtb6v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="viskcjbkm"/><path class="f8s_4jbup"/><path class="o8qnxtb6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:cov"} {...others} />);
}

export default Component;
