import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_qs-ppqy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="a_qs-ppqy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:folder-arrow-right-solid"} {...others} />);
}

export default Component;
