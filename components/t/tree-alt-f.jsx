import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/og7y7jbvw.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-1.5};
const content = `<path class="og7y7jbvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:tree-alt-f"} {...others} />);
}

export default Component;
