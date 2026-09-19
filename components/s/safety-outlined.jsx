import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g86q6cbgz.css';
import '../../css/s/sygzb3b8y.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="g86q6cbgz"/><path class="sygzb3b8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:safety-outlined"} {...others} />);
}

export default Component;
