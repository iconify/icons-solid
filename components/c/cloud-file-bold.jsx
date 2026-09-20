import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kh4v0zw4o.css';
import '../../css/a/a82paub2z.css';
import '../../css/o/ok1wrcikb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kh4v0zw4o"/><path class="a82paub2z"/><path class="ok1wrcikb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:cloud-file-bold"} {...others} />);
}

export default Component;
