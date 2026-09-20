import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/altng4btx.css';
import '../../css/v/v7d9vybds.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="altng4btx"/><path class="v7d9vybds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:common-file-module-1-bold"} {...others} />);
}

export default Component;
