import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6ih8ibvc.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="a6ih8ibvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:edit-fill"} {...others} />);
}

export default Component;
