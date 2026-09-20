import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yx9iroagb.css';
import '../../css/j/j7qjn6psg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yx9iroagb"/><path class="j7qjn6psg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-safari"} {...others} />);
}

export default Component;
