import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pvm2gtbqu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pvm2gtbqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:empty-set-solid"} {...others} />);
}

export default Component;
