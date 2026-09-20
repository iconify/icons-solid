import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/npf7jgx5v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="npf7jgx5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:paintbucket-filled"} {...others} />);
}

export default Component;
