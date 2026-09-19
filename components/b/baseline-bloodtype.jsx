import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s3q43ywjh {
  fill: currentColor;
  d: path("M12 2c-5.33 4.55-8 8.48-8 11.8c0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8m3 16H9v-2h6zm0-5h-2v2h-2v-2H9v-2h2V9h2v2h2z");
}
</style><path class="s3q43ywjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-bloodtype"} {...others} />);
}

export default Component;
